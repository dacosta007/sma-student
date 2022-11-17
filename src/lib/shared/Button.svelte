<script>
	export let pry = true, sec = false, info = false, success = false;
	export let warning = false, danger = false;
	export let outline = false, outlinePry = false, outlineSec = false;
	export let outlineInfo = false, outlineSuccess = false;
	export let outlineWarning= false, outlineDanger = false;
	export let block = false;
	export let btnType = 'button';
	export let disableBtn = false, showLoading = false, loadingStatus = 'loading...';
</script>

<div class="btn-container">
	<button class="btn" 
		type={btnType} 
		class:btn-pry={pry} 
		class:btn-block={block} 
		class:btn-sec={sec} 
		class:btn-info={info} 
		class:btn-success={success} 
		class:btn-warning={warning} 
		class:btn-danger={danger} 
		class:btn-outline={outline} 
		class:btn-outline-pry={outlinePry} 
		class:btn-outline-sec={outlineSec} 
		class:btn-outline-info={outlineInfo} 
		class:btn-outline-success={outlineSuccess} 
		class:btn-outline-warning={outlineWarning} 
		class:btn-outline-danger={outlineDanger} 
		disabled={disableBtn} 
		on:click
	>
		<slot></slot>
		<span class="loading" class:show-loading={showLoading}>{loadingStatus}</span>
	</button>
</div>

<style>
	.btn-container {
		margin-bottom: 0.5em;
	}
	
	.btn {
		display: block;
    padding: 14px 8px;
    border: none;
    border-radius: 4px;
    outline: none;
    background: var(--clr-off-white);
    color: var(--clr-txt);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    text-transform: capitalize;
		letter-spacing: 0.5px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    opacity: 0.9;
    -webkit-box-shadow: 0px 19px 40px -12px rgba(230, 210, 210, 0.35);
    box-shadow: 0px 19px 40px -12px rgba(230, 210, 210, 0.35);
    -webkit-transition: all 600ms ease-in-out;
    transition: opacity 600ms ease-in-out, box-shadow 600ms ease-in-out;
		position: relative;
		isolation: isolate;
	}
	
	.btn:hover, .btn:focus {
  	opacity: 1;
  	box-shadow: none;
		transition: opacity 600ms ease;
	}

	.btn:focus {
		border: 0px solid var(--clr-off-white);
	}
	
	.btn:active {
		animation: clickBtn 600ms ease;
	}
	
	.btn:disabled {
		opacity: 0.2;
		box-shadow: none !important;
	}

	.btn:disabled:active {
		animation: none;
	}

	.loading {
		display: none;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		text-align: center;
		text-transform: capitalize;
		font-weight: bold;
		align-items: center;
		background-color: #d4d5e5fa;
		color: var(--clr-text);
		border-radius: 4px;
	}

	.show-loading {
		display: grid;
	}

	.btn-block {
		width: 100%;
	}
	
	.btn-pry {
		background: var(--clr-site);
		color: var(--clr-white);
		box-shadow: 0px 19px 40px -12px rgba(28, 54, 167, 0.35);
	}

	.btn-sec {
		background: var(--clr-sec);
		color: var(--clr-white);
		box-shadow: 0px 19px 40px -12px rgba(25, 30, 54, 0.35);
	}

	.btn-success {
		background: var(--accent-success);
		color: var(--clr-white);
		box-shadow: 0px 19px 40px -12px rgba(65, 168, 34, 0.35);
	}

	.btn-warning {
		background: var(--accent-warning);
		color: var(--clr-white);
		box-shadow: 0px 19px 40px -12px rgba(129, 190, 14, 0.35);
	}

	.btn-danger {
		background: var(--accent-danger);
		color: var(--clr-white);
		box-shadow: 0px 19px 40px -12px rgba(179, 55, 25, 0.35);
	}

	.btn-outline {
		border: 2px solid var(--clr-off-white);
		background: none;
		opacity: 1;
		box-shadow: none;
		transition: background 600ms ease-in-out;
	}

	.btn-outline:hover, .btn-outline:focus {
		background: var(--clr-off-white);
	}

	.btn-outline:focus {
		border-color: var(--clr-off-white);
	}

	.btn-outline-pry {
		border: 2px solid var(--clr-site);
		background: transparent;
	}

	.btn-outline-pry:hover, .btn-outline-pry:focus {
		background: var(--clr-site);
		color: var(--clr-white);
	}

	.btn-outline-pry:focus {
		border-color: var(--clr-site);
	}

	.btn-outline-sec {
		border: 2px solid var(--clr-sec);
		background: transparent;
	}

	.btn-outline-sec:hover, .btn-outline-sec:focus {
		background: var(--clr-sec);
		color: var(--clr-white);
	}

	.btn-outline-sec:focus {
		border-color: var(--clr-sec);
	}

	.btn-outline-success {
		border: 2px solid var(--accent-success);
		background: transparent;
	}

	.btn-outline-success:hover, .btn-outline-success:focus {
		background: var(--accent-success);
		color: var(--clr-white);
	}

	.btn-outline-success:focus {
		border-color: var(--accent-success);
	}

	.btn-outline-warning {
		border: 2px solid var(--accent-warning);
		background: transparent;
	}

	.btn-outline-warning:hover, .btn-outline-warning:focus {
		background: var(--accent-warning);
		color: var(--clr-white);
	}

	.btn-outline-warning:focus {
		border-color: var(--accent-warning);
	}

	.btn-outline-danger {
		border: 2px solid var(--accent-danger);
		background: transparent;
	}

	.btn-outline-danger:hover, .btn-outline-danger:focus {
		background: var(--accent-danger);
		color: var(--clr-white);
	}

	.btn-outline-danger:focus {
		border-color: var(--accent-danger);
	}
	
	@keyframes clickBtn {
		from {
			transform: scale(0.9);
		}
		to {
			transform: scale(1);
		}
	}
</style>