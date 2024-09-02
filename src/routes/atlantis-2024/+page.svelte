<script>
  import logoBPD from "$lib/assets/logos/logo_bundeszentrale.png";
  import logoBLPB from "$lib/assets/logos/logo_wasserburg_poli.png";
  import logoWalOMat from "$lib/assets/wal-o-mat_logo.svg";
  import logoSeelachs from "$lib/assets/logos/logo_derseelachs.jpg";
  import logoWelle from "$lib/assets/logos/logo_welle.jpg";
  import logoZDF from "$lib/assets/logos/logo_zdf.jpg";
  import logoTAufSee from "$lib/assets/logos/logo_t-aufsee.jpg";
  import logoForelle from "$lib/assets/logos/logo_forelle.jpg";
  import logo1u1 from "$lib/assets/logos/logo_1u1.jpg";
  import logoRSA from "$lib/assets/logos/logo_redaktionsswarm.jpg";
  import logoFlossenFurt from "$lib/assets/logos/logo_flossenfurter_allgmeine.jpg";
  import logoFischNetz from "$lib/assets/logos/logo_fishnetz.jpg";
  import logoHandelskai from "$lib/assets/logos/logo_handelskai.jpg";
  import logoTAZ from "$lib/assets/logos/logo_taz.jpg";
  import logoWasserSpiegel from "$lib/assets/logos/logo_wasserspiegel.jpg";
  import logoMakreleDE from "$lib/assets/logos/logo_Makrele.jpg";
  import logoSächsischeSee from "$lib/assets/logos/logo_sächsische_see.jpg";
  import logoRiff24 from "$lib/assets/logos/logo_riff24.jpg";
  import { redirect } from "@sveltejs/kit";
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
</script>

<div class="mx-auto max-w-screen-md px-8 flex flex-col justify-start mt-12">
  <img src={logoWalOMat} alt="wal-o-mat logo" class="invert w-full" />
  <h2 class="text-3xl font-semibold mt-3">Atlantis 2024</h2>

  <button
    class=" button px-16 py-3 font-bold text-2xl self-end mt-10 hover:bg-white transition duration-300 ease-in"
    on:click={() => goto(`${base}/quiz`)}>Start</button
  >

  <p class="mt-16 text-lg">
    13 von 14 Walarten, die zur Wahl im Ozean antreten, haben die
    Wal-o-mat-Thesen beantwortet. Jetzt sind Sie an der Reihe: Vergleichen Sie
    Ihre Standpunkte mit den Antworten der Walarten.
  </p>
  <p class="mt-4">
    Der Wal-o-mat ist keine Empfehlung, welche Walart Sie wählen sollten,
    sondern ein Informationsangebot über Wale und ihr Verhalten.
  </p>

  <div class="flex items-center gap-8 my-14">
    <img class="max-w-52" src={logoBPD} alt="bundeszentrale fisch bildung" />
    <img class="max-w-52" src={logoBLPB} alt="brandenburg meereszentrale" />
  </div>

  <h3 class="font-semibold my-6">Medienpartner:</h3>
  <div class="flex flex-wrap gap-x-12 gap-y-5">
    <img class="max-h-14" src={logoSeelachs} alt="DER SEELACHS" />
    <img class="max-h-14" src={logoWelle} alt="WELLE" />
    <img class="max-h-14" src={logoZDF} alt="Zentrum der Fische" />
    <img class="max-h-14" src={logoTAufSee} alt="t-aufsee." />
    <img class="max-h-14" src={logoForelle} alt="FORELLE" />
    <img class="max-h-14" src={logo1u1} alt="1🐋1" />
    <img
      class="max-h-14"
      src={logoRSA}
      alt="RedaktionsSchwarm Atlantis (RSA)"
    />
    <img
      class="max-h-14"
      src={logoFlossenFurt}
      alt="Flossenfurter Allgemeine - ZEITUNG FÜR ATLANTIS"
    />
    <img class="max-h-14" src={logoFischNetz} alt="fischnetz" />
    <img class="max-h-14" src={logoHandelskai} alt="Handelskai" />
    <img class="max-h-14" src={logoTAZ} alt="taz 🐟" />
    <img class="max-h-14" src={logoWasserSpiegel} alt="WASSERSPIEGEL" />
    <img class="max-h-14" src={logoMakreleDE} alt="Makrele.de" />
    <img class="max-h-14" src={logoSächsischeSee} alt="Sächsische See" />
    <img class="max-h-14" src={logoRiff24} alt="riff 24" />
  </div>
</div>

<style>
  .button {
    border-width: 3px;
    color: rgb(91, 95, 253);
  }
</style>
