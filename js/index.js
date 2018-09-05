var app = new Vue({
   el: '#app',
   data: {
        list: [
            {
                id:1,
                name: "iPhone 7",
                price: 6188,
                count: 1,
                checked: true
             },
            {
                id: 2,
                name: "iPhone 8",
                price: 5888,
                count: 1,
                checked: false
            },
            {
                id: 3,
                name: " MacBook Pro",
                price: 21488,
                count: 1,
                checked: false
            }
        ]
   },
   computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++ ) {
                var item = this.list[i];
                if (item.checked == false) continue;
                total += item.price * item.count;
            }
            return total;
        }

   } ,
    methods: {
        handleReduce: function (index) {
            if (this.list[index].count == 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index,1);
        },
        handleCheck: function (index) {
            this.list[index].checked = this.list[index].checked == true ? false : true;
        }
        // handleAllCheck : function () {
        //
        //     this.list.forEach(function(value,index,list){
        //             list[index].checked = value.checked == true ? false : true;
        //     });
        // }
    }
});