//判断是移动端还是 pc 端 ，true 表示是移动端，false 表示是 pc 端
export const  isMobileOrPc= ()=> {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }
  