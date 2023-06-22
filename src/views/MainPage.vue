<template>
  <ion-page>
    <ion-content>
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          src="../assets/wall-street.jpg"
          alt="El lobo de Wall Street"
          style="width: 600px; height: 600px; margin-top: 60px"
        />
      </div>
      <div style="text-align: center">
        <p style="margin: 100px">
          "El lobo de Wall Street" es una película estadounidense que se estrenó
          en 2013. Está basada en las memorias del mismo nombre escritas por
          Jordan Belfort, un corredor de bolsa de Wall Street. La película
          retrata la vida de Belfort y su ascenso meteórico en el mundo de las
          finanzas, así como su vida personal marcada por el exceso y la
          corrupción.
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
