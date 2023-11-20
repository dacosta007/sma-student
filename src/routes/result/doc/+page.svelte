<script>
  import ResultSlip from "$lib/components/ResultSlip.svelte"
  import ExamSlip from "$lib/components/ExamSlip.svelte"
  import ReportNotice from "$lib/components/ReportNotice.svelte"
  import NoPayment from "$lib/components/NoPayment.svelte"

  export let data
</script>

<svelte:head>
  <title>{data.reportFor.reportType} Report sheet</title>
  <meta name="viewport" content="width=device-width, initial-scale=0.0">
</svelte:head>

<article>
  <!-- check for payment for the term in the session  -->
  {#if data.pay === null}
    <NoPayment stdName={data.stdName} reptInfo={data.reportFor} />
  {:else}
    <!-- Mid-Term report sheet -->
    {#if data.reportFor.reportType === 'midTerm'}
      <ResultSlip reportData={data.result} reportFor={data.reportFor} />
    {/if}

    <!-- Examination report sheet -->
    {#if data.reportFor.reportType === 'exam'}
      <ExamSlip reportData={data.result} reportFor={data.reportFor} />
    {/if}
  {/if}
</article>