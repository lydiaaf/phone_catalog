
                   <template>
                   <div>
                     <input v-model="search1" placeholder="edit me">
                     <b-button class="button"v-on:click="search2">search</b-button>
             <table align="center">
                <tr v-for="i in table2">
                <td>{{i.name}}</td>
                <td>{{i.phone}}</td>
                </tr>
                </table>
                <input on-click="checkbox" name="check" type="checkbox" v-model="value"> 
                <span>Checked names: {{ value }}</span>
                <router-view></router-view>
</div>
                </template>

                <script>
                export default {
                  name:'page3',
                data () {
                  return{
                   columns: [
          {
            name: "name"
          },{
            name: "phone"
          }
        ],
        rows: [
          {
            name: "Robert Duvak",
            phone: "jose26"
          },{
            name: "Isabelle Champion",
            phone: "isa"
          },{
            name: "Alberto Tulador",
            phone: "beber"
          }
        ]
       ,
                  table: [
        { name: 'Chuck Norris', phone: 9000 },
        { name: 'Chuck Norris1', phone: 9001 },
        { name: 'Chuck Norris2', phone: 9002 },
        { name: 'Chuck Norris3', phone: 9000 },
        { name: 'Chuck Norris4', phone: 9001 },
        { name: 'Chuck Norris5', phone: 9002 }
      ],
                  table2: [],
                  search:'',
                  search1:''
}
    },
    methods: {
      checkbox(){
        var status = false 
        for (i = 0; i < value.length; i++) {
        if value[i] == 'check' {
        status = true }elese
        {status = false}
        }                       
      },
                search2(){
        this.table2=[];
      for(const i of this.table){
      if (i.name.includes(this.search1)){
      this.table2.push(i)
      console.log(this.table2)
      }
      }
     }
                }
                
                }
                </script>