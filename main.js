var app = new Vue({
    el: '#app',
    data: {
        image: '',
        loading: false,
        predictions: []
    },
    methods: {
        loadFile: function (e) {
            var files = e.target.files || e.dataTransfer.files;

            if (!files.length)
                return;

            this.createImage(files[0]);
        },
        createImage: function (file) {
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function () {
            this.image = '';
            this.predictions = [];
        }
    }
});