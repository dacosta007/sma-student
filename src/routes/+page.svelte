<script>
  import { BranchInfoStore } from "$lib/stores/BranchInfoStore"

  export let data

  // info about the sch branch
  BranchInfoStore.set(data.branchInfo)
  // console.log($BranchInfoStore)
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AFSS Ibadan Student Portal</title>
</svelte:head>

<section class="home-page">
  <article class="action-sec">
    <header class="sch-logo-sec">
      <div class="sch-logo">
        <img src="imgs/AFSSLogo.png" alt="AFSS school logo" width="130" height="auto">
      </div>

      <h2>Student Portal</h2>
    </header>

    <section class="content">
      <p class="description">
        welcome to AFSS, Ibadan school's student portal. Here, you can check your child's exam, and mid-term 
        report records for the session. Click the button below to begin
      </p>

      <div class="cta-sec">
        <a href="/result" class="cta-btn">check result</a> 
      </div>
    </section>
  </article>

  <footer class="copyright-sec">
    <small>Copyright &copy;2022. AFSS Ibadan<sup>&trade;</sup> All rights Reserved</small>
  </footer>
</section>

<style>
  .home-page {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-sec);
    color: var(--clr-off-white);
    padding: 2em 0;
  }
  .action-sec {
    padding-top: 4em;
  }
  .sch-logo-sec {
    margin-bottom: 2.5em;
    text-align: center;
  }
  .content {
    width: 355px;
  }
  .description {
    font-size: 15px;
    margin-bottom: 1em;
  }
  .description::first-letter {
    text-transform: capitalize;
  }
  .cta-btn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    letter-spacing: 1px;
    text-transform: capitalize;
    font-size: 16px;
    font-family: var(--font-quicksand);
    background-color: var(--clr-off-white);
    color: var(--clr-sec);
    padding: 10px 12px;
    border-radius: 21px;
    width: 100%;
    appearance: none;
    outline: none;
    transition: background-color 0.5s ease;
  }
  .cta-btn:hover {
    background-color: #dce1ec;
  }
  .cta-btn:active {
    animation: clickBtn 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 600px) {
    .sch-logo-sec {
      margin-bottom: 2em;
    }
    .content {
      width: 100%;
      padding: 0 1.2em;
    }
    .description {
      margin-bottom: 1.5em;
    }
  }
</style>
