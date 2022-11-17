<script>
  import { BranchInfoStore } from "$lib/stores/BranchInfoStore"

  export let slipTitle

  let { contact } = $BranchInfoStore
  let { phone, email, schAddress } = contact
</script>

<header class="slip-header center-text">
  <div class="sch-img">
    <img src="/imgs/AFSSLogo.png" alt="sch_image" width="120" height="auto">
  </div>
  <div class="sch-info-container">
    <h2 class="sch-name">Apostolic Faith Secondary School</h2>
    <h4 class="sch-address">{schAddress ?? "SW8/803a, Lodge Street, Oke-Ado, Ibadan, Oyo State"}</h4>
    <h5 class="sch-contact">
      <div><span>email:</span> <span>{email[0]}</span></div>
      <div><span>tel:</span> <span>{phone[0]}</span></div>
    </h5>
  </div>
</header>

<h3 class="title slip-title center-text">{slipTitle}</h3>

<style>
  .slip-header {
    line-height: 1;
  }
  .sch-info-container {
    line-height: 1.4;
  }
  .sch-name {
    font-size: 1.9em;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .sch-address {
    font-size: 1.3em;
    font-weight: 400;
  }
  .sch-contact {
    display: flex;
    justify-content: center;
    gap: 1em;
    font-size: 1em;
    font-weight: 400;
  }
  .slip-title {
    margin: 0.5em 0;
    font-size: 1.5em;
    text-transform: capitalize;
  }
</style>