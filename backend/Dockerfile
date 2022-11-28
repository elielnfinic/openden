FROM rust:1.65.0
WORKDIR /usr/src/myapp
COPY . .
RUN cargo install --path .
RUN cargo build 
ENV PORT = 4500
EXPOSE 4500
CMD ["cargo","run"]
