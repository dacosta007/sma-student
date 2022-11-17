<script>
  export let reportTitle = 'Mid-Term Report'
</script>

<header class="center-text slip-header">
  <div class="sch-img">
    <img src="/imgs/AFSSLogo.png" alt="sch_image" width="120" height="auto">
  </div> 
  <div class="sch-info-container">
    <h2 class="sch-name">Apostolic Faith Secondary School</h2> 
    <h4 class="sch-address">SW8/803a, Lodge Street, Oke-Ado, Ibadan, Oyo State</h4> 
    <h5 class="sch-contact">
      <div><span>email:</span> <span>info@afssibadan.com.ng</span></div> 
      <div><span>tel:</span> <span>08034110127</span></div></h5>
  </div>
</header>

<h3 class="title slip-title center-text">{reportTitle}</h3>

<style>
  .slip-header {
    line-height: 1.4;
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 0.5em;
  }
  .sch-img img {
    width: 105px;
  }
  .sch-info-container {
    text-align: left;
  }
  .sch-name {
    font-size: 1.6em;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .sch-address {
    font-size: 1.1em;
    font-weight: 400;
  }
  .sch-contact {
    display: flex;
    justify-content: flex-start;
    gap: 1em;
    font-size: 1em;
    font-weight: 400;
  }
  .slip-title {
    margin: 0.1em 0;
    font-size: 1.2em;
    text-transform: capitalize;
  }
</style>