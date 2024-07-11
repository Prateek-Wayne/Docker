## 1: Try to connect with the mongo db:
## Docker Setup

1. Run the following command to start a MongoDB container:

```
docker run -p 27017:27017 mongo
```

2. To make the data persistent, connect MongoDB with a volume:

- Create a volume first:

```
docker volume create prateekVolume
```

- Connect MongoDB with the volume:

```
docker run -v prateekVolume:/data/db -p 27017:27017 mongo
```

3. If you want to run the `index.js` file locally without Docker, make sure to update the MongoDB URI to `mongodb://localhost:27017/testdb`. This way, the data will be persisted.

```
npm run dev
```
## Running whole code in docker.


