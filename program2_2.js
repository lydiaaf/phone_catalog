window.onload = function() {


    Vue.component('demo-grid', {
        template: '#grid-template',
        props: {
          data: Array,
          columns: Array,
          filterKey: String
        },
        data: function () {
          var sortOrders = {}
          this.columns.forEach(function (key) {
            sortOrders[key] = 1
          })
          return {
            sortKey: '',
            sortOrders: sortOrders
          }
          
        },
        computed: {
          filteredData: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.data
            if (filterKey) {
              data = data.filter(function (row) {
                return Object.keys(row).some(function (key) {
                  return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                })
              })
            }
            if (sortKey) {
              data = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
              })
            }
            return data
          }
        },
        filters: {
          capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
          }
        },
        methods: {
          sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
          }

          

        }
      })





new Vue({
    el: '#ll',
    data: { activetab: 1 ,
        searchQuery: '',
              gridColumns: ['name', 'phone'],
              gridData: [
                { name: 'Chuck Norris',phone: Infinity },
                { name: 'Bruce Lee', phone: 9000 },
                { name: 'Jackie Chan', phone: 7000 },
                { name: 'Jet Li', phone: 8000 }
              ]

         },
         methods: { 
           
          insert: function () { 
          var person = {name:this.name , phone:this.phone};
          this.gridData.push(person);
        }
          
         }
           
          });
          






}