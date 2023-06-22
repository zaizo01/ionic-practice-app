<template>
  <ion-page>
    <ion-content>
      <div style="display: flex; justify-content: center; align-items: center">
        <img
          src="../assets/me.png"
          alt="Cristopher Zaiz"
          style="width: 300px; height: 400px; margin-top: 60px"
        />
      </div>
      <div style="text-align: center">
        <p>Nombre: Cristopher Zaiz Ortega</p>
        <p>Correo: e.zaizortega@gmail.com</p>
        <p>Software Engineer</p>
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
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 10px;
}
</style>
