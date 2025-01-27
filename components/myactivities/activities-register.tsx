import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Input from '@/components/common/Input';
import SelectBox from '@/components/common/selectbox';
import {Controller, FormProvider, SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import arrowDown from '@/public/icon/icon_arrow_down.svg';
import minusBtn from '@/public/icon/ic_minus_btn.svg';
import plusBtn from '@/public/icon/ic_plus_btn.svg';
import AddressModal from './address-modal';
import Image from 'next/image';
import ImageList from './image-list';

export interface IFormInput {
  title: string;
  time: string;
  category: string;
  description: string;
  price: number;
  address: string;
  rows: Array<{
    date: string;
    startTime: string;
    endTime: string;
  }>;
  bannerImageUrl: string;
  subImageUrls: Array<string>;
}

interface ActivitiesRegisterProps {
  onSubmitParent?: (data: IFormInput) => void;
}

const ActivitiesRegister = forwardRef<{submitForm: () => void; isValid: boolean}, ActivitiesRegisterProps>(({onSubmitParent}, ref) => {
  const methods = useForm<IFormInput>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      time: '',
      category: '',
      description: '',
      price: 0,
      address: '',
      rows: [{date: '', startTime: '', endTime: ''}],
      bannerImageUrl: '',
      subImageUrls: [],
    },
  });

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
  } = methods;

  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'rows',
  });

  const handleAddRow = () => {
    append({date: '', startTime: '', endTime: ''});
  };

  const handleMinusRow = (index: number) => {
    remove(index);
  };

  const handleComplete = (data: {address: string; zonecode: string}) => {
    setIsOpen(false);
    setValue('address', data.address);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
  };

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log('Form Data:', data);
    if (onSubmitParent) {
      onSubmitParent(data);
    }
  };

  const generateTimeOptions = (): {value: string; label: string}[] => {
    const times: {value: string; label: string}[] = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      const time = `${formattedHour}:00`;
      times.push({value: time, label: time});
    }
    return times;
  };

  const timeOptions: {value: string; label: string}[] = generateTimeOptions();

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit(onSubmit),
    isValid: isValid,
  }));

  const options = [
    {value: '문화 · 예술', label: '문화 · 예술'},
    {value: '식음료', label: '식음료'},
    {value: '스포츠', label: '스포츠'},
    {value: '투어', label: '투어'},
    {value: '관광', label: '관광'},
    {value: '웰빙', label: '웰빙'},
  ];

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-4">
        <Controller
          name="title"
          control={control}
          rules={{
            required: '필수값입니다',
            minLength: {value: 5, message: '최소5 글자이상 입력해주세요'},
          }}
          render={({field: {value, onChange}}) => (
            <Input required={true} value={value} onChange={onChange} error={errors.title?.message} placeholder="제목" className="w-full" />
          )}
        />
        <Controller
          name="category"
          control={control}
          rules={{
            required: '필수값입니다',
          }}
          render={({field: {value, onChange}}) => (
            <SelectBox deleteButtonImage={arrowDown} value={value} className="w-full bg-white" onChange={onChange} options={options} />
          )}
        />
        {errors.category?.message && <span className="error-message">{errors.category?.message}</span>}
        <Controller
          name="description"
          control={control}
          rules={{
            required: '필수값입니다',
          }}
          render={({field: {value, onChange}}) => (
            <textarea
              required={true}
              value={value}
              onChange={onChange}
              placeholder="내용"
              className="h-40 w-full cursor-text resize-none rounded-s border border-gray-700 p-4 focus:outline-none focus:ring-2 focus:ring-green-950"
            ></textarea>
          )}
        />
        {errors.description?.message && <span className="error-message">{errors.description?.message}</span>}
        <Controller
          name="price"
          control={control}
          rules={{
            required: '필수값입니다',
          }}
          render={({field: {value, onChange}}) => (
            <Input
              label="가격"
              value={value ? value.toString() : ''}
              onChange={e => {
                const newValue = e.target.value.replace(/[^0-9]/g, '');
                onChange(newValue ? parseFloat(newValue) : '');
              }}
              className="w-full"
              error={errors.price?.message}
              isMoney={true}
            ></Input>
          )}
        />
        <Controller
          name="address"
          control={control}
          rules={{
            required: '필수값입니다',
          }}
          render={({field: {value, onChange}}) => (
            <Input
              label="주소"
              required={true}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              error={errors.address?.message}
              placeholder="주소를 입력해주세요"
              className="w-full"
            />
          )}
        ></Controller>
        {isFocused && isOpen && <AddressModal onClose={() => setIsOpen(false)} onComplete={handleComplete} />}
        <label className="mb-3 block text-xl font-bold tablet:text-2xl">예약 가능한 시간대</label>
        {fields.map((row, index) => (
          <div key={index}>
            <div className="grid grid-cols-[1fr,auto,auto,auto] gap-1 pc:grid-cols-[1fr,auto,auto,auto] pc:gap-4">
              <div>
                {index === 0 && <label className="text-xl font-medium text-gray-800">날짜</label>}
                <Controller
                  name={`rows.${index}.date` as const}
                  control={control}
                  rules={{
                    required: '필수값입니다',
                  }}
                  render={({field}) => (
                    <Input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      required={true}
                      value={field.value}
                      onChange={e => field.onChange(e.target.value)}
                      error={errors?.rows?.[index]?.date?.message}
                      className="w-full"
                    />
                  )}
                />
              </div>

              <div>
                {index === 0 && <label className="text-xl font-medium text-gray-800">시작 시간</label>}
                <Controller
                  name={`rows.${index}.startTime` as const}
                  control={control}
                  defaultValue="0:00"
                  render={({field}) => (
                    <SelectBox
                      value={field.value}
                      onChange={e => field.onChange(e.target.value)}
                      options={timeOptions}
                      selectButtonImage={arrowDown}
                      label="0:00"
                      className="w-full max-w-79pxr bg-white tablet:max-w-none"
                    />
                  )}
                />
                {errors?.rows?.[index]?.startTime?.message && <span className="error-message">{errors?.rows?.[index]?.startTime?.message}</span>}
              </div>
              <div>
                {index === 0 && <label className="text-xl font-medium text-gray-800">종료 시간</label>}
                <Controller
                  name={`rows.${index}.endTime` as const}
                  control={control}
                  defaultValue="0:00"
                  render={({field}) => (
                    <SelectBox
                      value={field.value}
                      onChange={e => field.onChange(e.target.value)}
                      options={timeOptions}
                      className="w-full max-w-79pxr bg-white tablet:max-w-none"
                      selectButtonImage={arrowDown}
                      label="0:00"
                    />
                  )}
                />
              </div>
              {index === 0 ? (
                <>
                  <div className="relative mt-26pxr h-16 w-16 cursor-pointer" onClick={handleAddRow}>
                    <Image src={plusBtn} alt="Add row" fill className="absolute" />
                  </div>
                </>
              ) : (
                <div className="relative h-16 w-16 cursor-pointer" onClick={() => handleMinusRow(index)}>
                  <Image src={minusBtn} alt="Remove row" fill />
                </div>
              )}
            </div>
            {index === 0 && fields.length > 1 && <hr className="mt-4"></hr>}
          </div>
        ))}
        <label className="mb-3 block text-xl font-bold tablet:text-2xl">배너 이미지</label> (최대 1장)
        <ImageList maxImages={1} name="bannerImageUrl" />
        <label className="mb-3 block text-xl font-bold tablet:text-2xl">소개 이미지</label> (최대 4장)
        <ImageList maxImages={4} name="subImageUrls" />
      </form>
    </FormProvider>
  );
});

ActivitiesRegister.displayName = 'ActivitiesRegister'; // forwardRef를 사용할 때 displayName 설정

export default ActivitiesRegister;
