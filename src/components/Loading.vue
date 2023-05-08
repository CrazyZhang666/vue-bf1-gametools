<script setup></script>

<template>
  <div class="show block full-v">
    <div class="loader-circle">
      <div class="loader-stroke">
        <div class="loader-stroke-left"></div>
        <div class="loader-stroke-right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.show {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block {
  color: #fff;
  font-size: 1em;
}
.full-v {
  width: 100%;
  height: 100%;
}

@-webkit-keyframes L_circle_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes L_circle_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes L_stroke_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes L_stroke_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@-webkit-keyframes L_stroke_fix {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(270deg);
  }
}
@keyframes L_stroke_fix {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(270deg);
  }
}
@-webkit-keyframes L_stroke_left_grow {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(-140deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@keyframes L_stroke_left_grow {
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(-140deg);
  }
  100% {
    transform: rotate(-5deg);
  }
}
@-webkit-keyframes L_stroke_right_grow {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(140deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
@keyframes L_stroke_right_grow {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(140deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
.loader-circle .loader-stroke-left::before,
.loader-circle .loader-stroke-right::before,
.loader-circle .loader-stroke::before {
  content: "";
  display: block;
}

.loader-circle .loader-stroke-left::before,
.loader-circle .loader-stroke-left,
.loader-circle .loader-stroke-right::before,
.loader-circle .loader-stroke-right,
.loader-circle .loader-stroke::before,
.loader-circle .loader-stroke,
.loader-circle {
  width: 2em;
  height: 2em;
  box-sizing: border-box;
  border-radius: 50%;
}

.loader-circle .loader-stroke-left::before,
.loader-circle .loader-stroke-right::before,
.loader-circle .loader-stroke::before {
  border-style: solid;
  border-width: 0.2142857143em;
  border-color: currentColor;
}

.loader-circle .loader-stroke-left::before,
.loader-circle .loader-stroke-right {
  position: absolute;
  clip: rect(0 2em 2em 1em);
}
.loader-circle .loader-stroke-left,
.loader-circle .loader-stroke-right::before {
  position: absolute;
  clip: rect(0 1em 2em 0);
}
.loader-circle .loader-stroke::before {
  position: absolute;
  clip: rect(0 1.05em 1em 0.95em);
}

.loader-circle {
  -webkit-animation: L_circle_rotate 1568.2352941176ms linear infinite both;
  animation: L_circle_rotate 1568.2352941176ms linear infinite both;
}
.loader-circle .loader-stroke::before,
.loader-circle .loader-stroke-right,
.loader-circle .loader-stroke-left {
  -webkit-animation: L_stroke_fix 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
    both;
  animation: L_stroke_fix 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.loader-circle .loader-stroke {
  -webkit-animation: L_stroke_rotate 5332ms steps(4) infinite both;
  animation: L_stroke_rotate 5332ms steps(4) infinite both;
}
.loader-circle .loader-stroke-right::before {
  -webkit-animation: L_stroke_right_grow 1333ms cubic-bezier(0.4, 0, 0.2, 1)
    infinite both;
  animation: L_stroke_right_grow 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
    both;
}
.loader-circle .loader-stroke-left::before {
  -webkit-animation: L_stroke_left_grow 1333ms cubic-bezier(0.4, 0, 0.2, 1)
    infinite both;
  animation: L_stroke_left_grow 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite
    both;
}

.loader-circle.slow {
  -webkit-animation: L_circle_rotate 5332ms linear infinite both;
  animation: L_circle_rotate 5332ms linear infinite both;
}
</style>
