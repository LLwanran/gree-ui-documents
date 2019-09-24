# 主体 Cordova 接口

##### [源码地址](http://gitlab.example.com/iot-4/android/greeplus_in/blob/master/GreePlus-Plu-In/plugin_headpage/src/main/java/com/greeplugin/cordova/PluginInterface.java)

<details>
<summary><strong style="color: #19be6b;">showToast</strong> - Toast提示</summary>
<p>

```Java
/**
  * @param text 提示内容 类型String
  * @param type 1长提示 其它是短提示 类型int
  */
private void showToast(String text, int type) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">editDevice</strong> - 跳转到设备编辑页</summary>
<p>

```Java
/**
  * 跳转到设备编辑页
  * @param mac
  */
private void editDevice(String mac) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">timerListDevice</strong> - 跳转到设备预约页</summary>
<p>

```Java
/**
  * 跳转到设备预约页
  * @param mac
  */
private void timerListDevice(String mac) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">sendDataToDevice</strong> - 发送json到设备</summary>
<p>

```Java
/**
  * 发送json到设备
  * @param mac
  * @param json
  */
private void sendDataToDevice(final String mac, final String json, final boolean isFollowSysVibration, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>sendDataToDevicePublic</strong> - 发送json到设备 公钥解密</summary>
<p>

```Java
/**
  * 发送json到设备 公钥解密
  * @param mac
  * @param json
  */
private void sendDataToDevicePublic(final String mac, final String json, final boolean isFollowSysVibration, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>sendDataToDeviceDayPublic</strong> - 发送json到设备 公钥解密</summary>
<p>

```Java
/**
  * 发送json到设备 公钥解密
  * @param mac
  * @param json
  */
private void sendDataToDeviceDayPublic(final String mac, final String json, final boolean isFollowSysVibration, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">closePage</strong> - 结束页面</summary>
<p>

```Java
/**
  * 结束页面
  */
private void closePage(String data) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ed4014;">getCCcmd</strong> - 调用主体场景功能</summary>
<p>

```Java
/**
  * 调用主体场景功能
  * @param mac
  * @param cmd
  * @param remark 场景模式返回给主体的指令名称
  * @param dat
  */
private void getCCcmd(String mac, String cmd, String remark, String dat) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">getInfo</strong> - 获取设备查询字段以及查看设备是否在线</summary>
<p>

```Java
/**
  * 获取设备查询字段以及查看设备是否在线
  */
private void getInfo(final String mac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">changeBarColor</strong> - 改变标题栏颜色（空字符串时不改变颜色）</summary>
<p>

```Java
/**
  * 改变标题栏颜色（空字符串时不改变颜色）
  * @param color
  */
private void changeBarColor(final String color) {}
```

</p>
</details>

<details>
<summary><strong style="color: #c5c8ce;">voiceDevice - 2.0已废弃，不需要此接口</strong></summary>
<p>

```Java
/**
  * 2.0已废弃，不需要此接口
  * @param mac
  */
private void voiceDevice(String mac) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">updateStates</strong> - 更新H5页面中的状态信息给主体</summary>
<p>

```Java
/**
  * 更新H5页面中的状态信息给主体
  */
private void updateStates(String mac, String data) {}
```

</p>
</details>

<details>
<summary><strong>newPage</strong> - 打开新页面</summary>
<p>

```Java
/**
  * 打开新页面
  */
private void newPage(String url) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">onCallBack</strong> - Cordova初始化成功后回调</summary>
<p>

```Java
/**
  * Cordova初始化成功后回调
  */
private void onCallBack(CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>showTimePicker</strong> - 日期时间选择Dialog</summary>
<p>

```Java
/**
  * 日期时间选择Dialog
  * @param type 0 显示时间和日期 1只显示日期 2只显示时间
  * @param callbackContext
  */
private void showTimePicker(int type, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>showAlert</strong> - 弹出提示对话框</summary>
<p>

```Java
/**
  * 弹出提示对话框
  * @param msg
  * @param callbackContext
  */
private void showAlert(String title, String msg, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>showConfirm</strong> - 弹出确认对话框</summary>
<p>

```Java
/**
  * 弹出确认对话框
  * @param msg
  * @param callbackContext
  */
private void showConfirm(String title, String msg, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>showMenuDialog</strong> - 拍照、选择图片对话框</summary>
<p>

```Java
/**
  * 拍照、选择图片对话框
  */
private void showMenuDialog(String mac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>addStore</strong> - 添加储存数据</summary>
<p>

```Java
/**
  * 添加储存数据
  * @param mac
  * @param val
  */
private void addStore(String mac, String key, String val, CallbackContext callback) {}
```

</p>
</details>

<details>
<summary><strong>updateStore</strong> - 更新储存数据</summary>
<p>

```Java
/**
  * 更新储存数据
  * @param key
  * @param val
  */
private void updateStore(String mac, String key, String val, CallbackContext callback) {}
```

</p>
</details>

<details>
<summary><strong>deleteStore</strong> - 删除储存数据</summary>
<p>

```Java
/**
  * 删除储存数据
  * @param key
  */
private void deleteStore(String mac, String key, CallbackContext callback) {}
```

</p>
</details>

<details>
<summary><strong>queryStore</strong> - 查询储存数据</summary>
<p>

```Java
/**
  * 查询储存数据
  * @param key
  * @return
  */
private void queryStore(String mac, String key, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>queryAllStore</strong> - 查询全部数据</summary>
<p>

```Java
/**
  * 查询全部数据
  * @param mac
  * @return
  */
private void queryAllStore(String mac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>deleteAllStore</strong> - 删除全部储存数据</summary>
<p>

```Java
/**
  * 删除全部储存数据
  */
private void deleteAllStore(String mac, CallbackContext callback) {}
```

</p>
</details>

<details>
<summary><strong>feedbackCommit</strong> - 反馈接口</summary>
<p>

```Java
/**
  * 反馈接口
  */
private void feedbackCommit(String mac) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ff9900;">startVoice</strong> - 弹出语音监听Dialog</summary>
<p>

```Java
/**
  * 弹出语音监听Dialog
  * @param callbackContext
  */
private void startVoice(final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ff9900;">startSpeak</strong> - 开始播报</summary>
<p>

```Java
/**
  * 开始播报
  * @param text
  */
private void startSpeak(String text) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ff9900;">stopSpeak</strong> - 结束播报</summary>
<p>

```Java
/**
  * 结束播报
  */
private void stopSpeak() {}
```

</p>
</details>

<details>
<summary><strong>translateValue</strong> - 发送给设备的json字段跟机型相关</summary>
<p>

```Java
/**
  * 发送给设备的json字段跟机型相关
  */
private void translateValue(String jsonData) {}
```

</p>
</details>

<details>
<summary><strong>pluginTranslateData</strong> - 冰箱食材</summary>
<p>

```Java
/**
  * 冰箱食材
  */
private void pluginTranslateData(String url, String jsonData, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>saveUserInfo</strong> - 保存用户信息</summary>
<p>

```Java
/**
  * 保存用户信息
  */
private void saveUserInfo(String key, String value) {}
```

</p>
</details>

<details>
<summary><strong>getUserInfo</strong> - 获取用户信息</summary>
<p>

```Java
/**
  * 获取用户信息
  */
private void getUserInfo(String key, String value, CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>backToHomePage</strong> - 跳转到主界面</summary>
<p>

```Java
/**
  * 跳转到主界面
  */
private void backToHomePage() {}
```

</p>
</details>

<details>
<summary><strong>sendDataToDeviceNoCallback</strong> - 发送json到设备</summary>
<p>

```Java
/**
  * 发送json到设备
  * @param mac
  * @param json
  */
private void sendDataToDeviceNoCallback(final String mac, final String json, final boolean isFollowSysVibration) {}
```

</p>
</details>

<details>
<summary><strong>pluginHttpPost</strong> - post方式http接口</summary>
<p>

```Java
/**
  * post方式http接口
  * @param url             网址
  * @param params          需要输入请求参数
  * @param hearders        需要输入请求头
  * @param callbackContext 返回
  */
private void pluginHttpPost(String url, String hearders, String params, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ff9900;">startListening</strong> - 开始语音监听无UI</summary>
<p>

```Java
/**
  * 开始语音监听无UI
  * @param callbackContext
  */
private void startListening(final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>addStoreList</strong> - 添加存储数据（数组）</summary>
<p>

```Java
/**
  * 添加存储数据（数组）
  */
private void addStoreList(String json, CallbackContext callback) {}
```

</p>
</details>

<details>
<summary><strong style="color: #ed4014;">getAllTimerList</strong> - 多联机获取主设备全部预约</summary>
<p>

```Java
/**
  * 多联机获取主设备全部预约
  */
private void getAllTimerList(String subMac, String mainMac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>getAllSubDevices</strong> - 多联机获取子设备列表</summary>
<p>

```Java
/**
  * 多联机获取子设备列表
  */
private void getAllSubDevices(String subMac, String mainMac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">finishLoad</strong> - 结束Loading</summary>
<p>

```Java
/**
  * 结束Loading
  */
private void finishLoad() {}
```

</p>
</details>

<details>
<summary><strong style="color: #2b85e4;">searchSubBLE</strong> - BLE网关搜索周围的蓝牙设备</summary>
<p>

```Java
/**
  * BLE网关搜索周围的蓝牙设备
  */
private void searchSubBLE(boolean isStart, String mac, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #2b85e4;">BLEAddMESH</strong> - 蓝牙组网</summary>
<p>

```Java
/**
  * 蓝牙组网
  */
public void BLEAddMESH(String mac, int subCount, JSONArray hashList, CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong style="color: #2b85e4;">BLEDelMESHSubDev</strong> - 删除蓝牙子设备</summary>
<p>

```Java
/**
  * 删除蓝牙子设备
  */
public void BLEDelMESHSubDev(String mac, int subCount, JSONArray hashList, CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>sendDataToDevicebyPower</strong> - 体检电量</summary>
<p>

```Java
/**
  * 体检电量
  * @param mac
  * @param json
  */
private void sendDataToDevicebyPower(final String mac, final String json, final boolean isFollowSysVibration, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>callNumber</strong> - 拨打电话</summary>
<p>

```Java
/**
  * 拨打电话
  */
private void callNumber(final String number) {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">toWebPage</strong> - 跳转webView</summary>
<p>

```Java
/**
  * 跳转webView
  */
private void toWebPage(String url, String title) {}
```

</p>
</details>

<details>
<summary><strong>thirdPlatformRequest</strong> - 第三方请求</summary>
<p>

```Java
/**
  * 第三方请求
  */
private void thirdPlatformRequest(String json, String url, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>getCurrentMode</strong> - 获取插件是否debug模式</summary>
<p>

```Java
/**
  * 获取插件是否debug模式
  */
private void getCurrentMode(CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>showLoading</strong> - 显示阻塞加载Loading</summary>
<p>

```Java
/**
  * 显示阻塞加载Loading
  */
private void showLoading() {}
```

</p>
</details>

<details>
<summary><strong style="color: #19be6b;">hideLoading</strong> - 隐藏阻塞加载Loading</summary>
<p>

```Java
/**
  * 隐藏阻塞加载Loading
  */
private void hideLoading() {}
```

</p>
</details>

<details>
<summary><strong>getSeaHeight</strong> - 获取海拔</summary>
<p>

```Java
/**
  * 获取海拔
  * @param mac
  * @param callbackContext
  */
public void getSeaHeight(String mac, CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>getGridConList</strong> - 获取光伏空调用电统计</summary>
<p>

```Java
/**
  * 获取光伏空调用电统计
  * @param mac
  * @param type
  */
public void getGridConList(final String mac, final String type, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>clearHistoricalPhotovoltaicPowerData</strong> - 清除光伏空调历史电量数据</summary>
<p>

```Java
/**
  * 清除光伏空调历史电量数据
  * @param mac
  * @param callbackContext
  */
public void clearHistoricalPhotovoltaicPowerData(final String mac , final  CallbackContext callbackContext){}
```

</p>
</details>

<details>
<summary><strong style="color: #2b85e4;">connectBleDevice</strong> - 连接到BLE设备</summary>
<p>

```Java
/**
  * 连接到BLE设备
  * 该方法还未完善，先预留接口以及调用说明，
  * 后续蓝牙进入h5时，发起连接状态均由此入口
  * @param mac 设备mac
  * @param callbackContext 主体回调结果给H5的接口
  */
private void connectBleDevice(String mac, final CallbackContext callbackContext){}
```

</p>
</details>

<details>
<summary><strong>getElecPowerConsumList</strong> - 获取普通空调用电统计</summary>
<p>

```Java
/**
  * 获取普通空调用电统计
  * @param mac
  * @param type
  */
public void getElecPowerConsumList(final String mac, final String type, final CallbackContext callbackContext) {}
```

</p>
</details>

<details>
<summary><strong>clearHistoricalPowerDat</strong> - 清除普通空调历史电量数据</summary>
<p>

```Java
/**
  * 清除普通空调历史电量数据
  * @param mac
  * @param callbackContext
  */
public void clearHistoricalPowerDat(final String mac , final  CallbackContext callbackContext){}
```

</p>
</details>

<details>
<summary><strong>getRoomDeviceSize</strong> - 通过mac获取设备对应房间下的所有设备数量</summary>
<p>

```Java
/**
 * 通过mac获取设备对应房间下的所有设备数量
 * @param mac
 * @param callbackContext
 */
private void getRoomDeviceSize(String mac,CallbackContext callbackContext){}
```

</p>
</details>
