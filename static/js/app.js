function getRandomArbitary(min, max)
{
  return Math.random() * (max - min) + min;
}

// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Vue.use(VueMaterial);

var app = new Vue({
  el: '#vc',
  delimiters: ["((","))"],
  data: {
    message: 'Started!',
    show: false,
    datas: [{index:"1",temp:"36.6",date:"2010-10-10 01:01:01",pulse:"90",oxy:"100"},
    {index:"2",temp:"37.6",date:"2010-10-10 01:02:01",pulse:"95",oxy:"80"},
    {index:"3",temp:"38.6",date:"2010-10-10 01:03:01",pulse:"96",oxy:"90"},
    {index:"4",temp:"39.6",date:"2010-10-10 01:04:01",pulse:"100",oxy:"100"},
    {index:"5",temp:"40.6",date:"2010-10-10 01:05:01",pulse:"120",oxy:"70"}
    ]
  },
  methods: {
  	ajxNewData() {
  		//спросим Flask про новые данные (на данный момент генерируется случайный набор)
  		this.datas.push({index:getRandomInt(5,100),temp: getRandomArbitary(35,42),date:"2010-10-10 01:05:01",pulse:getRandomInt(70,150),oxy:getRandomInt(50,100)});
  		this.$refs.rightSidenav.close();
  	},
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav() {
      
      this.$refs.rightSidenav.toggle();

    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
});

