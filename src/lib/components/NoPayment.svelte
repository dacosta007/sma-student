<script>
  import Card from "$lib/shared/Card.svelte"

  export let stdName = ''
  export let reptInfo = {}
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>No Payment Report</title>
  <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
</svelte:head>

<article class="notice-sec">
  <section class="notice-container">
    <Card>
      <header class="center-text notice-header">
        <lord-icon
          src="https://cdn.lordicon.com/nmgjlgnk.json"
          trigger="loop"
          colors="primary:#c79816,secondary:#e8b730"
          style="width:250px;height:250px">
        </lord-icon>

        <h2 class="title">Currently Uploading</h2>
      </header>

      <section class="notice-body">
        <p class="notice">
          Hi there {stdName.first}. Your <b>{reptInfo.reportType === 'midTerm' ? 'mid-term': 'exam'}</b> report is not yet released due to payment for the 
          term({reptInfo.term} term). The report for <b>{reptInfo.term}</b> term of <b style="font-size: 14px;">{reptInfo.session}</b> session will be 
          released when payment is made. Thank you 🙂.
        </p>

        <div class="center-text" style="margin-top: 1em;">
          <a href="/result" class="link-btn">back home</a>
        </div>
      </section>
    </Card>
  </section>
</article>

<style>
  .notice-sec {
    display: flex;
    justify-content: center;
    padding: 4em 1em;
  }
  .notice-container {
    width: clamp(350px, 100%, 450px);
  }
  .notice-header {
    padding: 1em 0.5em;
  }
  .notice-header h2.title {
    margin-top: -1em;
  }
  .notice-body {
    padding: 0em 1em 1.5em;
  }
  .notice {
    font-size: 16px;
  }
  .link-btn {
    display: inline-block;
    padding: 9px 8px;
    min-width: 120px;
    border: none;
    border-radius: 4px;
    outline: none;
    appearance: none;
    background: var(--clr-sec);
    color: var(--clr-off-white);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    text-transform: capitalize;
		letter-spacing: 0.5px;
    font-family: var(--font-quicksand), Arial, sans-serif;
    font-size: 15px;
    opacity: 0.9;
    -webkit-box-shadow: 0px 19px 40px -12px rgba(230, 210, 210, 0.35);
    box-shadow: 0px 19px 40px -12px rgba(230, 210, 210, 0.35);
  }
  .link-btn:active {
    animation: clickBtn 500ms cubic-bezier(0.68, -0.55, 0.27, 1.55) alternate;
  }
</style>