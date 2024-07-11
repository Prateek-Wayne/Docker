## 1: Try to connect with the MongoDB

### Docker Setup

1. Start a MongoDB container by running the following command:

```bash
docker run -p 27017:27017 mongo
```

2. To make the data persistent, connect MongoDB with a volume:

    - Create a volume first:

    ```bash
    docker volume create prateekVolume
    ```

    - Connect MongoDB with the volume:

    ```bash
    docker run -v prateekVolume:/data/db -p 27017:27017 mongo
    ```

3. If you want to run the `index.js` file locally without Docker, make sure to update the MongoDB URI to `mongodb://localhost:27017/testdb`. This way, the data will be persisted.

```bash
npm run dev
```

## Running the entire code in Docker

1. Create a network first:

```bash
docker network create prateekNetwork
```

2. Connect MongoDB to the network:

```bash
docker run -p 27017:27017 --network prateekNetwork -v prateekVolume:/data/db --name mongoDBPrateek mongo
```

    Note: Make sure to provide a name to the container and use the same name in the MongoDB URI. For example, the MongoDB URI should be `const MONGO_URI = "mongodb://mongoDBPrateek:27017/testdb";`.

3. Connect the Node.js application to the network:

```bash
docker run -p 3000:3000 --network prateekNetwork july
```

