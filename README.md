![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: example

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:moncon** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)
* [DID Method Specification](https://w3c-ccg.github.io/did-method-key/)

## Example DIDs

```
did:moncon:z6MkfrVYbLejh9Hv7Qmx4B2P681wBfPFkcHkbUCkgk1Q8LoT
did:moncon:z6MkwQpQz71n57h56eg5SReCyDnPQn23apc9Dq6BphFyP1yK
did:moncon:z6MkshpV2x1iUcipxdKP4Jb3ZoznwDN19eAMHwXZ14iBRKF3
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t universalresolver/driver-did-key
docker run -p 8080:8081 universalresolver/did-resolver-generic
curl -X GET http://localhost:8080/1.0/identifiers/did:moncon:z6MkuwvCt6G5jB6oZhG9pcVuoX5yhxeWV2jzFNZMw5G4pxNu
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

(none)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

(none)
