import Vue from "vue";
import toastBox from "./toast.vue";
const ToastConstructor = Vue.extend(toastBox);
ToastConstructor.prototype.close = function(target) {
  this.visible = false;
  target.parentNode.removeChild(target);
};
const Toast = (options) => {
  var instance = new ToastConstructor().$mount(document.createElement("div"));
  let duration = 1500;
  if (typeof options === "string") {
    instance.message = options;
  } else if (typeof options === "object") {
    duration = options.duration || 1500;
    instance.message = options.message;
  }
  document.body.appendChild(instance.$el);
  instance.visible = true;
  Vue.nextTick(() => {
    instance.timer = setTimeout(function() {
      instance.close(instance.$el);
    }, duration);
  });
  return instance;
};
export default Toast;
