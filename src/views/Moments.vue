<template>
  <ion-page>
    <ion-content>
      <div class="card">
        <img
          src="https://i.ytimg.com/vi/HCsjCo5BHWA/maxresdefault.jpg"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">El discurso motivacional de Jordan Belfort</h3>
          <p class="card-description">
            En una escena icónica, Jordan Belfort, interpretado por Leonardo
            DiCaprio, se dirige a su equipo de corredores de bolsa y les da un
            discurso inspirador y motivacional. Belfort enfatiza la mentalidad
            de la "venta agresiva" y logra generar una gran emoción entre su
            equipo.
          </p>
        </div>
      </div>

      <div class="card">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/18/11/wolf-of-wall-street.jpg"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">La escena del "Lemmon Quaaludes":</h3>
          <p class="card-description">
            Jordan Belfort y Donnie Azoff, interpretado por Jonah Hill, deciden
            tomar una gran cantidad de droga llamada "Lemmon Quaaludes". La
            escena se convierte en un momento cómico y caótico, mostrando los
            efectos alucinógenos de la droga y cómo afecta a los personajes en
            situaciones hilarantes.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="https://sm.ign.com/ign_es/screenshot/default/b1a0b40e530d22beb43936ef176a323b_p33w.jpg"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">El aterrizaje del avión:</h3>
          <p class="card-description">
            Jordan Belfort, bajo los efectos de las drogas, intenta volar un
            helicóptero mientras sufre una sobredosis. La escena muestra el
            peligroso vuelo, la lucha de Belfort por controlar la aeronave y su
            eventual aterrizaje forzoso. Este momento lleno de tensión y acción
            es uno de los momentos más intensos de la película.
          </p>
        </div>
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
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 350px;
  height: 300px;
}

.card-content {
  flex: 1;
}

.card-title {
  margin: 20px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  margin: 20px;
  font-size: 16px;
  color: #555;
}
</style>
