<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
    import WhaleInfo from "$lib/components/WhaleInfo.svelte";

    import {
        newEmptyWeights,
        sortedWeights,
        type WhaleWeights,
    } from "$lib/question";
    import { questions } from "$lib/questionData";
    import { results, type QuizResult } from "$lib/stores/results";
    import { remap } from "$lib/util";

    let sortedResults: [string, number][] = [];
    let answeredQuestions = 0;
    $: tryLoadResults($results);

    function tryLoadResults(r: QuizResult | null) {
        if (!browser) {
            return;
        }

        if (!r) {
            goto("/quiz");
            return;
        }

        sortedResults = sortedWeights(r.scores);
        answeredQuestions = r.answeredQuestions;
    }
</script>

<div
    class="mx-auto max-w-screen-lg mt-16 flex flex-col justify-start px-6 lg:px-0"
>
    <img src={logoWalOMat} alt="wal-o-mat logo" class="invert w-1/2" />
    <p class="text-md font-semibold mt-3 lg:text-2xl">Atlantis 2024</p>
</div>

<div class="mt-8 max-w-screen-xl mx-auto">
    <div class="max-w-screen-lg flex flex-col mx-auto px-6 lg:px-0">
        <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-10 font-semibold pb-8 max-w-screen-md"
        >
            Ihr Wal-O-Mat Ergebnis
        </h2>

        {#each sortedResults as whale, i}
            <WhaleInfo
                whaleName={whale[0]}
                waleScore={Math.min(
                    1,
                    remap(-1, 1, 0, 1, whale[1] / answeredQuestions) *
                        0.9 ** (i - 3)
                )}
                infoExpanded={i == 0}
            />
        {/each}
    </div>
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
