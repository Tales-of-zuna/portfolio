<template>
  <div class="h-screen bg-black">
    <LayoutNavbar />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  /* border: solid 3px #ffff; */
  border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
