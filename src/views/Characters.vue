<template>
  <ion-page>
    <ion-content>
      <div style="display: flex; justify-content: center; align-items: center">
        <div class="card">
          <img
            src="https://www.debate.com.mx/__export/1466359868862/sites/debate/img/2016/06/19/lobo_wall_street_att_16012014_2.jpg_423682103.jpg"
            alt="Imagen de Jordan Belfort"
            class="card-image"
          />
          <h3 class="card-title">Jordan Belfort</h3>
          <p class="card-description">
            Es el personaje principal de la película, basado en el verdadero
            Jordan Belfort. Comienza como un corredor de bolsa ambicioso y se
            convierte en un exitoso y despiadado empresario de Wall Street.
            Belfort se involucra en actividades fraudulentas y su vida está
            llena de excesos, drogas, fiestas extravagantes y un estilo de vida
            derrochador.
          </p>
        </div>

        <div class="card">
          <img
            src="https://media.revistagq.com/photos/6033d717ada4aff1ada602b3/16:9/pass/jonah-hill-lobo-de-wallstreet_widelg.jpg"
            alt="Imagen de Jordan Belfort"
            class="card-image"
          />
          <h3 class="card-title">Donnie Azoff</h3>
          <p class="card-description">
            Es el mejor amigo de Jordan Belfort y se convierte en su socio más
            cercano. Azoff es un personaje excéntrico y leal, que comparte el
            apetito de Belfort por el dinero y el lujo. Juntos, crean una
            empresa de corretaje que se involucra en prácticas ilegales y
            obtiene enormes ganancias.
          </p>
        </div>

        <div class="card">
          <img
            src="https://trome.com/resizer/qjc6vd-Ws8k-vVPzQfioEn__92U=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/NU2HOSA325A7BARSBJEOV43AGI.jpg"
            alt="Imagen de Naomi Lapaglia"
            class="card-image"
          />
          <h3 class="card-title">Naomi Lapaglia</h3>
          <p class="card-description">
            Es la segunda esposa de Jordan Belfort. Naomi es una mujer atractiva
            y ambiciosa que se enamora de Belfort y se ve atraída por su estilo
            de vida decadente. Sin embargo, a medida que su relación avanza,
            enfrenta los desafíos de su adicción y comportamiento irresponsable.
          </p>
        </div>

        <div class="card">
          <img
            src="https://www.tonica.la/__export/1587750544481/sites/debate/img/2020/04/24/matthew_mcconaughey_ritual_the_wolf_of_wall_street.jpg_554688468.jpg"
            alt="Imagen de Mark Hanna"
            class="card-image"
          />
          <h3 class="card-title">Mark Hanna</h3>
          <p class="card-description">
            Es un exitoso corredor de bolsa y mentor de Jordan Belfort al
            comienzo de su carrera. Hanna introduce a Belfort en el mundo de las
            finanzas y le enseña algunos de los trucos y tácticas deshonestas
            utilizadas en Wall Street.
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
.card {
  margin: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s;
}

.card-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 20px;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-description {
  font-size: 16px;
  color: #555;
}
</style>
