<script>
  import { enhance } from "$app/forms"
  import { BranchInfoStore } from "$lib/stores/BranchInfoStore"
  import { ResultStore } from "$lib/stores/ResultStore"

  import Button from "$lib/shared/Button.svelte";

  export let data
  // the form-action data
  // export let form

  BranchInfoStore.set(data.branchInfo)
  // console.log($BranchInfoStore.academicYear)
  let btnProps = {
    btnType: 'submit',
    pry: true,
    block: true,
    loadingStatus: "Please wait...",
    showLoading: false,
    disableBtn: true
  }

  let error, success

  function checkField(event) {
    let inpt = event.target.value
    if (inpt === '') {
      btnProps.disableBtn = true
      error = 'Please fill in all required fields'
      return
    }
    btnProps.disableBtn = false
  }

  function checkReport({ form }) {
    // run before form submission
    btnProps.disableBtn = true
    btnProps.showLoading = true
    
    let reptTerm = form.term.value
    let reptType = form.reportType.value
    // run after form submission
    return async ({ result, update }) => {
      if (result.type === 'success' && result.data.success === true) {
        // console.log(result)
        ResultStore.set(result.data.data)
        
        // enable back, the submit button
        btnProps.showLoading = false
        btnProps.disableBtn = false

        // check if the report is already added before redirecting
        if (result.data.data[`${reptType}`].report[`${reptTerm}`] === undefined) {
          alert(`🚨 Your "${reptType === 'midTerm' ? 'Mid-Term': 'Exam'}" for "${reptTerm} term" is yet to be uploaded/ready!`)
          return
        }

        // redirect user to report page
        location.href = result.data.goto
        return
      }
      // not successful message
      console.log(result)
      btnProps.disableBtn = false
      btnProps.showLoading = false
    }
  }
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Check Your Report</title>
</svelte:head>

<section class="page">
  <div class="content">
    <header class="auth-header">
      <div class="sch-img">
        <img src="imgs/AFSSLogo.png" alt="sch logo" width="130" height="auto">
      </div>
      <div class="title-sec">
        <h3>check Report</h3>
      </div>
    </header>
    
    <!-- error message -->
    {#if error}
      <p class="center-text" style="color: var(--accent-danger); padding: 0.8em 0;">{error}</p>
    {/if}
    <article class="form-sec">
      <form method="post" action="?/report" use:enhance={checkReport}>
        <!-- student ID -->
        <div class="input-field">
          <label for="studtId">student ID</label>
          <input type="text" name="studtId" id="studtId" on:input={checkField} placeholder="Student ID" required>
        </div>
        <!-- session & term -->
        <div class="session-term">
          <div class="input-field">
            <label for="session">session</label>
            <select name="session" id="session" required>
              <option value={$BranchInfoStore.academicYear.session}>{$BranchInfoStore.academicYear.session}</option>
            </select>
          </div>
          
          <div class="input-field">
            <label for="term">term</label>
            <select name="term" id="term" required>
              <option value={$BranchInfoStore.academicYear.currentTerm}>{$BranchInfoStore.academicYear.currentTerm}</option>
              <option value="second">second</option>
              <option value="first">first</option>
              <!-- <option value="third">third</option> -->
            </select>
          </div>
        </div>
        <div class="input-field">
          <label for="rptType">report type</label>
          <select name="reportType" id="rptType" required>
            <option value="midTerm">Mid-term report</option>
            <option value="exam">Exam report</option>
          </select>
        </div>
  
        <div class="btn-sec">
          <Button {...btnProps}>
            view report
          </Button>
        </div>
      </form>
    </article>
  </div>
</section>

<style>
  .page {
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
  .content {
    width: 355px;
  }
  .auth-header {
    text-align: center;
  }
  .title-sec {
    line-height: 1.2;
  }
  .title-sec h3 {
    font-size: 1.5em;
    font-family: var(--font-quicksand);
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .input-field {
    padding-left: 0;
    padding-right: 0;
    padding-top: 1em;
  }
  label {
    color: var(--clr-off-white);
    margin-bottom: 0.5em;
  }
  select#term, select#rptType {
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .btn-sec {
    margin: 1em 0 0;
  }

  @media (max-width: 600px) {
    .content {
      width: 100%;
      padding: 0 1.2em;
    }
  }
</style>