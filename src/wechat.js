const robot = require("robotjs");

// (async () => {
//   await tab()
//   delay(1000)
//   await search('QF881111');
//   await sendMsg('8888')
//   await delay(1000)
//   await search('QF881112');
//   await delay(1000)
//   await sendMsg('888')

// })();

exports.send = async ({ id, msg }) => {
  await tab();
  await delay(100);
  await search(id);
  await delay(500);
  await sendMsg(msg);
};



/**
 * 选中第一个用户
 */
async function selectFirstUser() {
  // robot.moveMouse(200, 130);
  robot.moveMouse(170, 130);
  await delay(100);
  robot.mouseClick();
}

/**
 * 打开到微信
 */
async function open() {
  robot.keyTap("space", "command");
  robot.keyTap("a", "command");
  robot.keyTap("backspace");
  "weixin".split("").forEach((v) => {
    robot.keyTap(v);
  });
  robot.keyTap("enter");
}
/**
 * 切换到微信
 */
async function tab() {
  console.log("切换到微信窗口");
  // robot.moveMouse(220, 110);
  // await delay(100);
  // robot.mouseClick();
  // await selectFirstUser();
  robot.moveMouse(33, 65);
  await delay(100);
  robot.mouseClick();
}

/**
 * 根据关键词搜索
 * @param {*} text
 */
async function search(text) {
  console.log("搜索:" + text);

  robot.keyTap("f", "command");
  // robot.typeString("QF881112");
  // text = text.toLowerCase();
  for (let v of text.split("")) {
    await delay(10);
    robot.keyTap(v);
  }
  await delay(1000);
  robot.keyTap('enter')
  await selectFirstUser();
}

async function sendMsg(text) {
  robot.keyTap("a", "command");
  robot.keyTap("backspace");
  await delay(300);
  robot.typeString(text);
  robot.keyTap("enter");
}

/**
 * 每次下翻一个用户
 */
async function scrollUser() {
  console.log("");
  robot.mouseClick();
  robot.moveMouse(200, 110);
  robot.scrollMouse(0, -60);
}

async function main(roomName) {
  // for (let i = 0;i < 10;i++) {
  //   await delay(1000);
  //   robot.mouseClick();
  //   robot.moveMouse(200, 110);
  //   robot.scrollMouse(0, -60);

  //   robot.typeString("你好abc" + i);
  // }

  // await delay(500);
  // robot.keyTap("f", "command");
  // robot.typeString("QF881111");
  // robot.mouseClick();
  // await delay(1000);
  // robot.keyTap("a", "command");
  // robot.keyTap("backspace");
  // robot.typeString("原来是说你在杭州吗？");
  // robot.keyTap("enter");

  // await delay(1000);
  robot.keyTap("f", "command");
  // robot.typeString("QF881112");
  for (let v of "qf881112".split("")) {
    await delay(10);
    robot.keyTap(v);
  }
  await delay(100);
  robot.keyTap("enter");
  await delay(100);

  robot.mouseClick();
  // await delay(500);
  robot.keyTap("a", "command");
  robot.keyTap("backspace");
  robot.typeString("北京？");
  // robot.keyTap("enter");

  // await delay(1000);
  // robot.typeString('roomName');

  // 现在进入群了
  // await delay(2000);
  // robot.keyTap("enter");

  // // 输入文字
  // await delay(1000);
  // robot.typeString(sendData);

  // // 发送消息
  // await delay(1000);
  // robot.keyTap("enter");
}

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
