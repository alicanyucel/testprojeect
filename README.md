# Firebase Entegrasyonlu Angular Projesi

Bu proje, Angular 16 ve Firebase Realtime Database kullanılarak geliştirilmiş bir web uygulamasıdır.

## Özellikler

- Firebase Realtime Database entegrasyonu
- Booking trips verilerinin gerçek zamanlı listelenmesi
- Modern Angular ve Firebase modüler API kullanımı

## Kurulum

1. Projeyi indirin ve klasöre gidin:
```bash
cd testprojeect
```

2. Gerekli paketleri yükleyin:
```bash
npm install
```

3. Firebase yapılandırması:
   - Firebase Console'dan (https://console.firebase.google.com/) yeni bir proje oluşturun
   - Realtime Database'i etkinleştirin
   - Projenizin Firebase yapılandırma bilgilerini `src/environments/environment.ts` dosyasına ekleyin:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
    databaseURL: "your-database-url"
  }
};
```

4. Uygulamayı başlatın:
```bash
ng serve
```

## Kullanılan Teknolojiler

- Angular 16
- Firebase 9.x
- RxJS 7.x
- Angular Fire
- TypeScript

## Proje Yapısı

```
src/
├── app/
│   ├── firebase.service.ts    # Firebase servis işlemleri
│   ├── app.component.ts       # Ana uygulama bileşeni
│   └── app.module.ts         # Uygulama modülü
├── environments/
│   └── environment.ts        # Firebase yapılandırması
└── ...
```

## Önemli Notlar

- Firebase Console'dan alınan yapılandırma bilgilerinin doğru girildiğinden emin olun
- Realtime Database kurallarını yapılandırın
- Node.js ve npm'in güncel sürümlerini kullanın

## Geliştirme

Projeyi geliştirmek için:
1. `ng serve` komutunu çalıştırın
2. Tarayıcıda `http://localhost:4200/` adresine gidin
3. Kod değişiklikleri otomatik olarak yenilenir

## Lisans

MIT

## İletişim

Ali Can Yücel Lider Yazılım Mühendisi
- GitHub: [alicanyucel](https://github.com/alicanyucel)

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
