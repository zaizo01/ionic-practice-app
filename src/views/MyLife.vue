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
          Porque podemos aprender sobre la ambición y el éxito, La película
          presenta una visión cruda y provocativa del mundo de las finanzas y la
          ambición desmedida. Puede provocar una reflexión profunda sobre los
          valores personales, la ética y el verdadero significado del éxito en
          la vida de alguien.
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
p {
  font-size: 26px;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>
