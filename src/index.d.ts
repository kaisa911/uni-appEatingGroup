declare namespace Global {
  interface IVue {
    mpType: String;
    onLaunch(): void;
    onShow(): void;
    onHide(): void;
  }
  interface IState {
    nickname: string;
  }

  interface IUserInfo {
    id: string;
    name: string;
    avatar: string;
    calorie: number;
    level: number;
    levelScore: number;
    nextLevel: number;
    balance: number;
    myOrder: number;
    cardName: string;
    cardType: string;
  }

  interface IReturn {
    code: number;
    msg: string;
    data: any;
  }
}
