<script>
  import ResultSlip from "$lib/components/ResultSlip.svelte"
  import ExamSlip from "$lib/components/ExamSlip.svelte"

  export let data

  // console.log(data)
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
    <ExamSlip reportData={data.result} reportFor={data.reportFor} />
  {/if}
</article>