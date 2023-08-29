<script>
  import Card from "$lib/shared/Card.svelte"

  const someJsonCode = `{
    "error": {
      "errors": [
      {
        "domain": "global",
        "reason": "invalidParameter",
        "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]",
        "locationType": "parameter",
        "location": "chart"
      }
      ],
      "code": 400,
      "message": "Invalid string value: 'asdf'. Allowed values: [mostpopular]"
    }
  }`;
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Server Error 🚧 🚩</title>
</svelte:head>

<section class="home-page">
  <div class="info-container">
    <Card>
      <header class="header-sec">
        <div class="img-container">
          <img src="imgs/scheduled-maintenance-message_1.png" alt="maintenance_img" width="250" height="auto">
        </div>
        <h2 class="title">500 Internal server error</h2>
      </header>
  
      <section class="msg-container">
        <p>
          Sorry, something went wrong. Please contact your engineering team or webmaster to trouble shot with the code below:
        </p>
  
        <div class="server-code-err">
          <code>
            $2a$04$H4EvhNdqqjcxb4FsE/NAKOZljtLHioFMer9qkDTV9BjjO31qH8xpW-
            $2a$04$yeGXoFAjezsfPNg.JAV/s.Npi0XJoLiN.315QyK8j8o6bNdizaTeW-
            $2a$04$OS4pA.hNf8GB/VYO4NuZdeA2U7J5zKiTj.exhUCrzTlX5F1t5eGyu.
            $2a$04$DQXV1tak6VqPOyyKaJDlg.Jit7isK1uGD7zBOQtRFOyupotCn4a3O
          </code>
    
          <pre>{someJsonCode}</pre>
        </div>
  
        <p>some list of causes:</p>
  
        <ul>
          <li>System Zero downtime Maintenance</li>
          <li>Server Deprecated Resources</li>
          <li>Some DB Clusters Deficit</li>
          <li>APIs Bad Request</li>
        </ul>

        <div class="msg-strong">Please contact support.</div>
      </section>
    </Card>
  </div>
</section>

<style>
  .home-page {
    width: 100%;
    height: 100dvh;
    max-height: 100%;
    overflow: auto;
    display: grid;
    place-items: center;
    background-color: var(--clr-sec);
    padding: 2em 1em;
  }
  .info-container {
    width: clamp(350px, 70%, 700px);
  }
  .header-sec {
    padding: 0.8em 1.4em;
    text-align: center;
  }
  .img-container {
    position: relative;
  }
  .img-container img {
    width: 100%;
    height: auto;
  }
  .header-sec h2 {
    margin-top: -2em;
  }
  .msg-container {
    padding: 0em 1.4em;
  }
  .msg-container p {
    font-size: 14px;
  }
  .server-code-err {
    background-color: var(--clr-sec);
    color: silver;
    padding: 0.5em;
    border-radius: 0.5em;
    overflow: auto;
  }
  ul {
    font-size: 13px;
    list-style-type: disc;
    padding-left: 15px;
  }
  .msg-strong {
    font-size: 14px;
    font-weight: bold;
    padding: 1em 0em;
  }
  @media (max-width: 600px) {
    .home-page {
      display: block;
    }
    .info-container {
      overflow: hidden;
      margin-top: 0;
      width: 100%;
    }
    .header-sec h2 {
      margin-top: -1.5em;
    }
  }
</style>
