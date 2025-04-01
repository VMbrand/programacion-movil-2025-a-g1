import React from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

const ProveedorPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Proveedor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Página de Proveedor</h1>
      </IonContent>
    </IonPage>
  );
};

export default ProveedorPage;
