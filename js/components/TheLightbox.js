export default {
  name: 'TheLightboxCmponent',


  props: ['hero'],

  emits: ['closelightbox'],

  template: `
  <div class="lightbox">

    <img
      @click="closeLB"
      src="images/closebutton.png"
      class="lightbox_close"
    />
  <!-- hero image on the left, text on the right -->
  <!-- her image is a background image -->
    <article>
      <div class="lb-details">
  
      <div class="lbcontent">
          <p class="lbname">{{hero.name}}</p>
          <p class="lbinfo">{{hero.bio}}</p>
          <p class="lbinfo">{{hero.fullinfo}}</p>
        </div>
        <div class="lb-image">
        <img :src='"images/" + hero.lbBG' alt="" />
        
        </div>
        
      </div>
    </article>

</div>     
  
  
  
  `
  ,
  methods: {
    closeLB() {
      this.$emit('closelightbox');
    }
  },
}






