export default {
  name: "ThePortfolio",

  emits: ['loadlbdata'],

  props: {
    hero: Object
  },

  template: `
    
    <div class="feature-project">
      <div class="feature-info">
        <ul class="feature-details">
          <li class="feature-Name">{{hero.name}}</li>
          <li class="feature-shortdetails">
            <p class="feature-shortdetail">
             {{hero.bio}}
            </p>
            
          </li>
        </ul>
        <div class="Projectinfo-btn">
          <a class="Project-btn" @click="loadLBData">Know More</a>
        </div>
      </div>
      <div class="feature-image">
      <img :src='"images/" + hero.pic' alt="" />
      </div>
      </div>
    
    
    
    
    
    
    
    `,
  methods: {
    loadLBData() {
      this.$emit('loadlbdata', this.hero);
      this.body.style.overflow = "hidden";
    }
  },



}