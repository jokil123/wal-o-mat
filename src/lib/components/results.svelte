<script lang="ts">
    import { questions } from "$lib/questions";
    import WhaleInfo from "./WhaleInfo.svelte";

    const whaleMap = new Map<string, number>();

    whales.forEach((key: string, i: number) => {
        whaleMap.set(key, pointsVector[i]);
    });

    const sortedWhaleMap = new Map(
        [...whaleMap.entries()].sort((a, b) => b[1] - a[1])
    );

    console.log(whaleMap);
    console.log(sortedWhaleMap);
</script>

<div class="max-w-screen-lg flex flex-col mx-auto px-6 lg:px-0">
    <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 font-semibold pb-8 max-w-screen-md"
    >
        Ihr Wal-O-Mat Ergebnis
    </h2>

    {#each sortedWhaleMap as whale, i}
        <WhaleInfo
            whaleName={whale[0]}
            waleScore={whale[1]}
            rounds={questions.length}
            infoExpanded={i == 0}
        />
    {/each}
</div>
