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

  const { currentTerm, session:currentSession } = $BranchInfoStore.academicYear
  let listOfTerms = [], listOfSessions = []

  /* help create list options for terms to select by user */
  if (currentTerm || currentTerm != undefined) {
    switch (currentTerm) {
      case 'first':
        listOfTerms = ['first', 'second', 'third']
      break;

      case 'second':
        listOfTerms = ['second', 'first', 'third']
      break;

      case 'third':
        listOfTerms = ['third', 'second', 'first']
      break;
    
      default:
        listOfTerms = ['first', 'second', 'third']
      break;
    }
  }

  /* help create list options for session to select by user */
  if (currentSession || currentSession != undefined) {
    for (let i = 0; i < 3; i++) {
      let str1, str2, sessionStr

      if (listOfSessions.length === 0) {
        str1 = parseInt(currentSession.split('/')[0])
        str2 = parseInt(currentSession.split('/')[1])
        sessionStr = `${str1 + 1}/${str2 + 1}`
        listOfSessions.push(sessionStr)
      }
      if (listOfSessions.length > 0) {
        str1 = parseInt((listOfSessions[i]).split('/')[0])
        str2 = parseInt((listOfSessions[i]).split('/')[1])
        sessionStr = `${str1 + 1}/${str2 + 1}`
        listOfSessions.push(sessionStr)
      }
    }
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
      if (result.type === 'invalid' || result.data.error) {
        alert(`🚨 Your "${reptType === 'midTerm' ? 'Mid-Term': 'Exam'}" for "${reptTerm} term" is yet to be uploaded/ready!`)
        btnProps.disableBtn = false
        btnProps.showLoading = false
        return
      }
      
      if (result.data.success === true && result.data.data === null) {
        alert(`🚨 Your "${reptType === 'midTerm' ? 'Mid-Term': 'Exam'}" for "${reptTerm} term" is yet to be uploaded/ready!`)
        btnProps.disableBtn = false
        btnProps.showLoading = false
        return
      }

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
      }

      // on unsuccessful message enable submit btn back & remove loading state on btn 
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
              <option value="2022/2023">2022/2023</option>
              <option value={currentSession}>{currentSession}</option>
              {#each listOfSessions as sess}
                <option value="{sess}">{sess}</option>
              {/each}
            </select>
          </div>
          
          <div class="input-field">
            <label for="term">term</label>
            <select name="term" id="term" required>
              {#each listOfTerms as term}
                <option value="{term}">{term}</option>
              {/each}
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