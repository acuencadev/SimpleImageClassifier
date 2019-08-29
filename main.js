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

            this.predict().then(predictions => {
                this.predictions = predictions;
            });
        },
        removeImage: function () {
            this.image = '';
            this.predictions = [];
        },
        predict: async function () {
            this.loading = true;
            net = await mobilenet.load();

            var predictImage = this.$refs.predictImage;

            this.loading = false;

            return net.classify(predictImage);
        }
    }
});
0