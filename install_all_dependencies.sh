!/bin/sh
echo "Instalando dependencias de la APP"
cd smart-carrier-app/
npm install
echo "Instalando dependencias de la API"
cd ..
cd smart-carrier-api/
npm install
