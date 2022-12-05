FROM --platform=linux/x86-64 rust
WORKDIR /usr/src/myapp
COPY . .
RUN cargo install --path .
RUN cargo build 
ENV PORT = 4500
EXPOSE 4500
CMD ["cargo","run"]
