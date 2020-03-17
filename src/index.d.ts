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
}
