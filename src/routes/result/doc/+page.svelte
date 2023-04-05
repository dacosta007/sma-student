<script>
  import { BranchInfoStore } from "$lib/stores/BranchInfoStore"

  import ResultSlip from "$lib/components/ResultSlip.svelte"
  import ExamSlip from "$lib/components/ExamSlip.svelte"
  import ReportNotice from "$lib/components/ReportNotice.svelte"

  export let data

  const { academicYear } = $BranchInfoStore
  
  let { session:currentSession, currentTerm } = academicYear

  // console.log(`current session: ${currentSession}`, `current term: ${currentTerm}`)
</script>

<svelte:head>
  <title>Report sheet</title>
  <meta name="viewport" content="width=device-width, initial-scale=0.0">
</svelte:head>

<article>
  <!-- Mid-Term report sheet -->
  {#if data.reportFor.reportType === 'midTerm'}
    <ResultSlip reportData={data.result} reportFor={data.reportFor} />
  {/if}

  <!-- Examination report sheet -->
  {#if data.reportFor.reportType === 'exam'}
    <!-- report for the current term within the session -->
    {#if data.reportFor.term === currentTerm && data.reportFor.session === currentSession}
      <ReportNotice examType={'exam'} studtInfo={data.result} />
    {:else}
      <ExamSlip reportData={data.result} reportFor={data.reportFor} />
    {/if}
  {/if}
</article>