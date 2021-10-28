export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    this.caller = null;

    Vue.prototype.$edit = {
      EventBus: new Vue(),

      showedit(event, items) {
        const caller = event.target;
        if (!caller !== this.caller) {
          this.caller = caller;
          this.EventBus.$emit("showedit", { items, event });
        } else {
          this.hideedit();
        }
        this.EventBus.$emit("shownEdit,");
        console.log("showedit", { items });
      },
      hideedit() {
        this.EventBus.$emit("hideEdit,");
      },
    };
  },
};
