<template>
  <TresCanvas window-size clear-color="#6e44ff">
    <TresPerspectiveCamera :position="[0, 0, 1.75]" />

    <OrbitControls />
    <Suspense>
      <Pumpkin />
    </Suspense>
    <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />
    <TresAmbientLight :intensity="1" />
    <Stars :size="0.75" :radius="150" />
  </TresCanvas>
</template>
