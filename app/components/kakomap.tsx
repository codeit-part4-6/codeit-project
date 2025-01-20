'use client';
import Image from 'next/image';
import {useEffect} from 'react';
import LocationIcon from '@/public/icon/icon_location.svg';

interface KakaoMapType {
  address: string;
  houseName?: string;
}

export default function KakaoMap({address, houseName}: KakaoMapType) {
  useEffect(() => {
    const loadKakaoMapScript = () => {
      // script를 만들어서 추가시켜준다.
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = true;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services&autoload=false`;

      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.onload = () => {
        kakao.maps.load(() => {
          // 지도를 표시할 div
          const mapContainer = document.getElementById('map');
          const mapOptions = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

          if (mapContainer) {
            // 지도를 생성합니다
            const map = new kakao.maps.Map(mapContainer, mapOptions);

            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address, (result, status) => {
              // 정상적으로 검색이 완료됐으면
              if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                });
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">${houseName}</div>`,
                });
                infowindow.open(map, marker);
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
              } else {
                console.error('주소를 찾지 못했습니다.');
              }
            });
          } else {
            console.error('mapContainer가 존재하지 않습니다.');
          }
        });
      };
    };

    loadKakaoMapScript();
  }, [address, houseName]);

  return (
    <>
      <div id="map" className={'pc:w-790pxr m-0 h-481pxr w-327pxr tablet:h-310pxr tablet:w-453pxr pc:h-476pxr'} />
      <div className={'flex flex-wrap'}>
        <Image className={'m-0 mr-1'} src={LocationIcon} alt="Location" width={18} height={18} />
        <p>{address}</p>
      </div>
    </>
  );
}
