<script lang="ts">
    import Results from "$lib/components/results.svelte";

    import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
</script>

<div
    class="mx-auto max-w-screen-lg mt-16 flex flex-col justify-start px-6 lg:px-0"
>
    <img src={logoWalOMat} alt="wal-o-mat logo" class="invert w-1/2" />
    <p class="text-md font-semibold mt-3 lg:text-2xl">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
    <Results rounds={editedTotalQuestions} {pointsVector} whales={whaleNames}
    ></Results>
</div>

<style lang="scss">
    .triangle {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0 60px 60px 0px;
        border-color: transparent transparent white transparent;
        transform: rotate(90deg);
    }
</style>
