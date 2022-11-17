<script>
  import ResultSlip from "$lib/components/ResultSlip.svelte";

  export let data

  // console.log(data)
</script>

<article>
  <!-- <p>View document: <b>{data.docId}</b></p> -->
  <ResultSlip reportData={data.result} reportFor={data.reportFor} />
</article>