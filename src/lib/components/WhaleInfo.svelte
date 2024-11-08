<script lang="ts">
    import Stat from "./Stat.svelte";
    import chevron from "$lib/assets/chevron.png";
    import { whalesInfo, type WhaleInfo } from "$lib/whaleInfo";

    export let whaleName: string;
    export let rounds: number;
    export let waleScore: number;

    let whaleInfo: WhaleInfo | undefined = whalesInfo.find((i) => {
        return i.name.toLowerCase() == whaleName.toLowerCase();
    });

    export let infoExpanded: boolean = false;
</script>

<div class="w-full mb-4">
    <div class="flex items-center gap-3 mb-3">
        <h2 class="font-bold text-2xl">{whaleName}</h2>
        <button
            on:click={() => {
                infoExpanded = !infoExpanded;
            }}
        >
            <img
                src={chevron}
                alt="dropdown chevron"
                class="w-8 transition-transform {!infoExpanded && 'rotate-180'}"
            />
        </button>
    </div>
    <Stat score={waleScore / rounds}></Stat>
    {#if infoExpanded && whaleInfo}
        <div class="mb-5">
            <p class="mb-5">{whaleInfo.infoText}</p>
            <img src={whaleInfo.image} alt={whaleName} />
            <a class="text-blue-600" href={whaleInfo.wikipediaLink}
                >{whaleInfo.wikipediaLink}</a
            >
        </div>
    {/if}
    {#if infoExpanded && !whaleInfo}
        <div class="mb-5">
            <p class="mb-5">Noch keine Information zu diesem Wal :(</p>
        </div>
    {/if}
</div>
