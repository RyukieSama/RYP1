cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        // 以秒为单位的时间间隔
        var interval = 5;
        // 重复次数
        var repeat = 1;
        // 开始延时
        var delay = 5;
        this.schedule(function() {
            // 这里的 this 指向 component
            this.goToHomeScene();
        }, interval, repeat, delay);

    },

    goToHomeScene : function() {

        cc.director.loadScene("SceneHome");

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
