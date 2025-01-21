export interface ReviewModalProps {
  message: string;
  onClose: () => void;
  data?: {
    id: number;
    teamId: string;
    userId: number;
    activity: {
      bannerImageUrl: string;
      title: string;
      id: number;
    };
    scheduleId: number;
    status: string;
    reviewSubmitted: boolean;
    totalPrice: number;
    headCount: number;
    date: string;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
  };
}
