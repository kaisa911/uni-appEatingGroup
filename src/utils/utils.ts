const showLoading = (): void => {
  uni.showLoading({
    title: '正在加载',
  });
};

const hideLoading = (): void => {
  uni.hideLoading();
};

export default {
  hideLoading,
  showLoading,
};
