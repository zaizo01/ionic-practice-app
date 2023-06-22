<template>
  <ion-page>
    <ion-content>
      <div style="text-align: center">
        <div class="about-section">
          <img
            src="../assets/wall-street.jpg"
            style="width: 400px; height: 400px"
          />
          <h2 class="section-title">Acerca de "El lobo de Wall Street"</h2>
          <div class="movie-info">
            <h3 class="movie-title">El lobo de Wall Street</h3>
            <p class="movie-summary">
              "El lobo de Wall Street" es una película estadounidense dirigida
              por Martin Scorsese y estrenada en 2013. Está basada en las
              memorias del mismo nombre escritas por Jordan Belfort, un corredor
              de bolsa de Wall Street. La película narra la vida de Belfort,
              desde sus humildes comienzos hasta su ascenso meteórico en el
              mundo de las finanzas, así como su vida personal marcada por el
              exceso y la corrupción.
            </p>
          </div>

          <div class="movie-info">
            <h3 class="movie-title">Sinopsis</h3>
            <p class="movie-summary">
              La historia sigue a Jordan Belfort (interpretado por Leonardo
              DiCaprio), quien comienza su carrera en Wall Street con grandes
              sueños de éxito. Con su astucia y falta de escrúpulos, Belfort se
              convierte rápidamente en un corredor de bolsa exitoso, acumulando
              riqueza y viviendo un estilo de vida decadente. Sin embargo, su
              camino hacia la cima está plagado de corrupción, estafas y excesos
              desenfrenados. Mientras el FBI se acerca cada vez más a sus
              actividades ilegales, Belfort se ve atrapado en una red de
              mentiras y engaños que amenaza con derribarlo.
            </p>
          </div>

          <div class="cast-info">
            <h3 class="cast-title">Reparto destacado</h3>
            <ul class="cast-list">
              <li>Leonardo DiCaprio como Jordan Belfort</li>
              <li>Jonah Hill como Donnie Azoff</li>
              <li>Margot Robbie como Naomi Lapaglia</li>
              <li>Matthew McConaughey como Mark Hanna</li>
              <li>Kyle Chandler como Patrick Denham</li>
            </ul>
          </div>
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
.about-section {
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.movie-info {
  margin-bottom: 30px;
}

.movie-title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-summary {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
}

.cast-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.cast-list {
  list-style: none;
  padding-left: 0;
  font-size: 16px;
  color: #555;
}

.cast-list li {
  margin-bottom: 5px;
}
</style>
